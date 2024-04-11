import express from "express";
import db from "@repo/db/client";

const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };

    try {
        await db.$transaction(async (prisma) => {
            // First, check if the user has an existing balance.
            const existingBalance = await prisma.balance.findUnique({
                where: {
                    userId: Number(paymentInformation.userId,)
                },
            });

            // If the user has an existing balance, update it.
            if (existingBalance) {
                await prisma.balance.update({
                    where: {
                        userId: Number(paymentInformation.userId)
                    },
                    data: {
                        amount: {
                            increment: Number(paymentInformation.amount),
                        },
                    },
                });
            } else {
                // If no existing balance, create a new balance record for the user.
                await prisma.balance.create({
                    data: {
                        userId: Number(paymentInformation.userId),
                        amount:  Number(paymentInformation.amount),
                        locked: 0, // Assuming "locked" starts at 0 for new balance records.
                    },
                });
            }

            // Update the OnRampTransaction status to "Success".
            await prisma.onRampTransaction.updateMany({
                where: {
                    token: paymentInformation.token,
                },
                data: {
                    status: "Success",
                },
            });
        });

        res.json({ message: "Captured" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Error while processing webhook" });
    }
});

app.listen(3003, () => {
    console.log("Server running on port 3003");
});
