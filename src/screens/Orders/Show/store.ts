import {makeAutoObservable} from "mobx";
import {SingleOrder} from "~/screens/Orders/Show/types";
import client from "~/api/gql";
import {ORDER_QUERY} from "~/screens/Orders/Show/queries";

export default class OrdersShowStore {
    order: SingleOrder | null = null;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadOrder(id: string): void {
        this.loading = true
        client.query(ORDER_QUERY, {id: +id}).toPromise().then((result) => {
            this.order = result.data.order;
            this.loading = false;
        })
    }
}
