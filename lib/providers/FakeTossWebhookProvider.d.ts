import { ITossPaymentWebhook } from "../api/structures/ITossPaymentWebhook";
export declare namespace FakeTossWebhookProvider {
    function webhook(input: ITossPaymentWebhook): Promise<void>;
}
