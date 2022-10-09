import express from "express";
import { ITossCashReceipt } from "../api/structures/ITossCashReceipt";
export declare class FakeTossCashReceiptsController {
    /**
     * 현금 영수증 발행하기.
     *
     * @param input 입력 정보
     * @returns 현금 영수증 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    store(request: express.Request, input: ITossCashReceipt.IStore): ITossCashReceipt;
    /**
     * 현금 영수증 취소하기.
     *
     * @param receiptKey 현금 영수증의 {@link ITossCashReceipt.receiptKey}
     * @param input 취소 입력 정보
     * @returns 취소된 현금 영수증 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    cancel(request: express.Request, receiptKey: string, input: ITossCashReceipt.ICancel): ITossCashReceipt;
}
