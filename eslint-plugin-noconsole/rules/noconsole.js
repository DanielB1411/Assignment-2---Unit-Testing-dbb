// eslint-plugin-noconsole/rules/noconsole.js
module.exports = {
    meta: {
      type: 'problem',
      docs: {
        description: "disallow the use of console",
        category: "Possible Errors",
        recommended: true,
      },
      schema: [], // No options
    },
    create: function(context) {
      return {
        CallExpression(node) {
          if (node.callee.object && node.callee.object.name === 'console') {
            context.report({
              node,
              message: "Console found. Not allowed.",
            });
          }
        },
      };
    },
  };
  