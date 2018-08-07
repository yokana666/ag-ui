import { inject, bindable, BindingEngine, observable, computedFrom } from 'aurelia-framework'
var moment = require('moment');

@inject(BindingEngine, Element)
export class DataForm {
    @bindable readOnly = false;
    @bindable data = {};
    @bindable error = {};
    @bindable title;

    constructor(bindingEngine, element) {
        this.bindingEngine = bindingEngine;
        this.element = element;
    }

    itemsInfo = {
        columns: [{ header: "Nomor PO External", value: "purchaseOrderExternal" }],
        onAdd: function () {
            this.context.ItemsCollection.bind();
            this.data.items.push({ purchaseOrderExternal: { no: "" } });
        }.bind(this)
    };

    @computedFrom("data._id")
    get isEdit() {
        return (this.data._id || '').toString() != '';
    }

    // @computedFrom("data.supplier")
    // get filter() {
    //     var filter = {
    //         supplierId: this.data.supplier._id
    //     }
    //     return filter;
    // }

    // attached() {
    //     if (this.data.items) {
    //         this.data.items.forEach(item => {
    //             item.showDetails = false
    //         })
    //     }
    // }

    // addItem() {
    //     this.data.items = this.data.items ? this.data.items : [];
    //     this.data.items.push({ showDetails: false });
    // }

    // removeItem(item) {
    //     var itemIndex = this.data.items.indexOf(item);
    //     this.data.items.splice(itemIndex, 1);
    // }


    bind(context) {
        this.context = context;
        this.data = this.context.data;
        this.error = this.context.error;
        if (this.data && this.data.supplier)
            this.data.supplier.toString = function () {
                return this.code + " - " + this.name;
            };
    }

    @computedFrom("data.supplier")
    get filter() {
        var filter = {
            supplierId: this.data.supplierId || {},
            isEdit: this.isEdit
        }
        return filter;
    }

    supplierChanged(e) {
        var selectedSupplier = e.detail;
        if (selectedSupplier) {
            this.data.supplierId = selectedSupplier._id ? selectedSupplier._id : "";
            if (!this.readOnly)
                this.data.items = [];
        }
        else {
            this.data.supplierId = undefined;
            this.data.items = [];
        }
        // this.resetErrorItems();
    }

    // resetErrorItems() {
    //     if (this.error) {
    //         if (this.error.items) {
    //             this.error.items = [];
    //         }
    //     }
    // }
} 