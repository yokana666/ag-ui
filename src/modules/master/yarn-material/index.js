export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: true, title: 'List' },
            { route: 'view/:id', moduleId: './view', name: 'view', nav: false, title: 'View: Benang Material' },
            { route: 'edit/:id', moduleId: './edit', name: 'edit', nav: false, title: 'Edit: Benang Material' },
            { route: 'create', moduleId: './create', name: 'create', nav: false, title: 'Create: Benang Material' }
        ]);

        this.router = router;
    }
}
