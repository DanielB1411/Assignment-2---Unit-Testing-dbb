// eslint-plugin-noconsole/rules/no-moment-imports.js

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "disallow imports from 'moment'",
            category: "Best Practices",
            recommended: true,
        },
        schema: [], // No options
        messages: {
            noMomentImport: "Importing from 'moment' is banned!!!.",
        },
    },
    create: function(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value === 'moment') {
                    context.report({
                        node,
                        messageId: "noMomentImport",
                    });
                }
            },
        };
    },
};
