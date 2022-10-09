import { ITossBilling } from "../api/structures/ITossBilling";
import { ITossCashReceipt } from "../api/structures/ITossCashReceipt";
import { ITossPayment } from "../api/structures/ITossPayment";
import { ITossPaymentWebhook } from "../api/structures/ITossPaymentWebhook";
import { VolatileMap } from "../utils/VolatileMap";
export declare namespace FakeTossStorage {
    const payments: VolatileMap<string, ITossPayment>;
    const billings: VolatileMap<string, [
        ITossBilling,
        ITossBilling.IStore
    ]>;
    const cash_receipts: VolatileMap<string, ITossCashReceipt>;
    const webhooks: VolatileMap<string, ITossPaymentWebhook>;
}
