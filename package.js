Package.describe({
    name: 'xerdi:local-storage',
    version: '0.0.6',
    summary: 'Local storage helpers for meteor',
    git: 'https://github.com/Xerdi/meteor-local-storage.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.11.0');
    api.use([
        'ecmascript',
        'reactive-var',
        'reactive-dict'
    ]);
    api.mainModule('helpers/index.js', 'client');
});
