import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {
  dataToBePosted = [];

  rowFormatter(data, index) {
    if (data.isPosted)
      return { classes: "success" }
    else
      return {}
  }

  context = ["Detail", "Cetak Bukti Realisasi"]

  columns = [
    { field: "DocumentNo", title: "No. Realisasi VB" },
    { field: "VBRequestDocumentNo", title: "No. Permohonan VB" },
    {
      field: "Date", title: "Tanggal Realisasi", formatter: function (value, data, index) {
        return moment(value).format("DD MMM YYYY");
      }
    },
    {
      field: "VBRequestDocumentRealizationEstimationDate", title: "Tanggal Estimasi", formatter: function (value, data, index) {
        if (data.VBRequestDocumentNo)
          return moment(value).format("DD MMM YYYY");
        else
          return "-";
      }
    },
    // { field: "UnitLoad", title: "Beban Unit" },
    { field: "CreatedBy", title: "Dibuat oleh" },
    {
      field: "Position", title: "Status Verifikasi",
      formatter: function (value, row, index) {
        return value > 3 ? "Sudah" : "Belum";
      }
    }
  ];

  async activate(params) {
    this.ressearch = params.search;
  }

  loader = (info) => {
    let order = {};

    if (info.sort)
      order[info.sort] = info.order;
    else
      order["LastModifiedUtc"] = "desc";

    let arg = {
      page: parseInt(info.offset / info.limit, 10) + 1,
      size: info.limit,
      keyword: info.search,
      order: order
      // filter: JSON.stringify({ VBRealizeCategory: "NONPO" }),
    };

    return this.service.search(arg)
      .then(result => {
        return {
          total: result.info.total,
          data: result.data
        }
      });
  }

  constructor(router, service) {
    this.service = service;
    this.router = router;
  }

  contextClickCallback(event) {
    var arg = event.detail;
    var data = arg.data;
    switch (arg.name) {
      case "Detail":
        this.router.navigateToRoute('view', { id: data.Id, search: this.ressearch });
        break;
      case "Cetak Bukti Realisasi":
        this.service.getSalesReceiptPdfById(data.Id);
        break;
    }
  }

  contextShowCallback(index, name, data) {
    switch (name) {
      case "Cetak Bukti Realisasi":
        return data;
      default:
        return true;
    }
  }

  posting() {
    if (this.dataToBePosted.length > 0) {
      this.service.post(this.dataToBePosted).then(result => {
        this.table.refresh();
      }).catch(e => {
        this.error = e;
      })
    }
  }

  create() {
    this.router.navigateToRoute('create');
  }
}
