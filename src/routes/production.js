module.exports = [
    {
        route: 'production/spinning/winding/winding-quality-sampling',
        name: 'winding-quality-sampling',
        moduleId: './modules/production/spinning/winding/winding-quality-sampling/index',
        nav: true,
        title: 'Quality Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            permission : {"P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG":1},
            iconClass: 'fa fa-dashboard'
        }
    },

    {
        route: 'production/spinning/winding/winding-quality-sampling/report',
        name: 'winding-quality-sampling-report',
        moduleId: './modules/production/spinning/winding/reports/winding-quality-sampling-report/index',
        nav: true,
        title: 'Laporan Quality Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            permission : {"P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG":1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/spinning/winding/winding-production-output',
        name: 'winding-production-output',
        moduleId: './modules/production/spinning/winding/winding-production-output/index',
        nav: true,
        title: 'Output Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            permission : {"P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG":1},
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'production/spinning/winding/reports/daily-spinning-production-report',
        name: 'daily-spinning-production-report',
        moduleId: './modules/production/spinning/winding/reports/daily-spinning-production-report/index',
        nav: true,
        title: 'Monitoring Output Hasil Produksi Spinning',
        auth: true,
        settings: {
            group: "production",
            permission : {"P1": 1, "P3": 1, "P4": 1, "P6": 1, "P7": 1, "PG":1},
            iconClass: 'fa fa-dashboard'
        }
    },
    // {
    //     route: 'production/finishing-printing/daily-operation',
    //     name: 'dailys',
    //     moduleId: './modules/production/finishing-printing/daily-operation/index',
    //     nav: true,
    //     title: 'Daily Operation',
    //     auth: true,
    //     settings: {
    //         group: "production",
    //         permission: { "*": 0 },
    //         iconClass: 'fa fa-dashboard'
    //     }
    // },
    {
        route: 'production/finishing-printing/monitoring-event',
        name: 'monitoring-event',
        moduleId: './modules/production/finishing-printing/monitoring-event/index',
        nav: true,
        title: 'Monitoring Event',
        auth: true,
        settings: {
            group: "production",
            permission : {"*": 0},
            iconClass: 'fa fa-dashboard'
        }
    }]
    // ,
    // {
    //     route: 'production/finishing-printing/reports/daily-operation-report',
    //     name: 'report-dailys',
    //     moduleId: './modules/production/finishing-printing/reports/daily-operation-report/index',
    //     nav: true,
    //     title: 'Report Daily Operation',
    //     auth: true,
    //     settings: {
    //         group: "production",
    //         permission: { "*": 0 },
    //         iconClass: 'fa fa-dashboard'
    //     }
    // }
