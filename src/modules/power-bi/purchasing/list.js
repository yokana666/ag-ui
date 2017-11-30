import {inject, Lazy} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Service} from './service';


@inject(Router, Service)
export class List {
    data = [];
    listReport = [
        "AG Durasi PR",
        "AG Durasi PO Internal PO Eksternal",
        "AG Durasi PO Eksternal Surat Jalan",
        "AG Durasi Rencana Datang-Barang Tiba",
        "AG Durasi Bon Terima Unit - Surat Perintah Bayar",
        "AG PR belum dibuat PO Internal",
        "AG Bon Terima Unit Belum Dibuat Surat Perintah Bayar",
        "AG Total Pembelian",
        "AG Total Hutang",
        "AG Perbandingan Purchase Order",
        "AG Perbandingan Purchase Order Per Staff",
        "AG Ketepatan Waktu Supplier",
        "AG Top Ten Supplier per Kategori",

    ];
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }

    activate() {
        this.service.search('')
            .then(data => {
                for (var report of this.listReport) {
                    var _data = data.find((_data) => _data.name === report);
                    if (_data) {
                        this.data.push(_data);
                    }
                }
            })
    }

    view(data) {
        this.router.navigateToRoute('view', { id: data.id });
    }
}
