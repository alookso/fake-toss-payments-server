import express from "express";
import { ITossPayment } from "../api/structures/ITossPayment";
import { ITossPaymentWebhook } from "../api/structures/ITossPaymentWebhook";
export declare class FakeTossInternalController {
    /**
     * 웹훅 이벤트 더미 리스너.
     *
     * `internal.webhook` 은 실제 토스 페이먼츠의 결제 서버에는 존재하지 않는 API 로써,
     * `fake-toss-payments-server` 의 {@link Configuration.WEBHOOK_URL} 에 아무런 URL 을
     * 설정하지 않으면, `fake-toss-payments-server` 로부터 발생하는 모든 종류의 웹훅
     * 이벤트는 이 곳으로 전달되어 무의미하게 사라진다.
     *
     * 따라서 `fake-toss-payments-server` 를 사용하여 토스 페이먼츠 서버와의 연동을 미리
     * 검증코자 할 때는, 반드시 {@link Configuration.WEBHOOK_URL} 를 설정하여 웹훅
     * 이벤트가 귀하의 백엔드 서버로 제대로 전달되도록 하자.
     *
     * @param input 웹훅 이벤트 정보
     * @author Jeongho Nam - https://github.com/samchon
     */
    webhook(input: ITossPaymentWebhook): void;
    /**
     * 가상 계좌에 입금하기.
     *
     * `internal.virtual_accounts.deposit` 은 실제 토스 페이먼츠의 결제 서버에는 존재하지
     * 않는 API 로써, 가상 계좌 결제를 신청한 고객이, 이후 가상 계좌에 목표 금액을 입금하는
     * 상황을 시뮬레이션할 수 있는 함수이다.
     *
     * 즉 `internal.virtual_accounts.deposit` 는 고객이 스스로에게 가상으로 발급된 계좌에
     * 입금을 하고, 그에 따라 토스 페이먼츠 서버에서 webhook 이벤트가 발생하여 이를 귀하의
     * 백엔드 서버로 전송하는 일련의 상황을 테스트하기 위한 함수인 셈이다.
     *
     * @param paymentKey 대상 가상 계좌 결제 정보의 {@link ITossPayment.paymentKey}
     * @returns 입금 완료된 가상 꼐좌 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    deposit(request: express.Request, paymentKey: string): ITossPayment;
}
