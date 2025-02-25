export class Accounttransaction {

    public accountNumber?: number;
    public customerId?: number;
    public transactionDt?: Date;
    public transactionSummary?: string;
    public transactionType?: string;
    public transactionAmt?: number;
    public closingBalance?: number;

    constructor(accountNumber?: number, customerId?: number, transactionDt?: Date, transactionSummary?: string,
        transactionType?: string, transactionAmt?: number, closingBalance?: number) {
        this.accountNumber = accountNumber;
        this.customerId = customerId;
        this.transactionDt = transactionDt;
        this.transactionSummary = transactionSummary;
        this.transactionType = transactionType;
        this.transactionAmt = transactionAmt;
        this.closingBalance = closingBalance;
    }

}
