module.exports = {
    meta: {
      type: "suggestion",
      docs: {
        description: "enforce camelCase naming convention for functions",
        category: "Stylistic Issues",
        recommended: false,
      },
      schema: [], // no options
      messages: {
        notCamelCase: "Function names should be in camelCase."
      },
    },
    create: function (context) {
      const camelCasePattern = /^[a-z][a-zA-Z0-9]*$/;
  
      function checkName(node) {
        const name = node.id && node.id.name;
        if (name && !camelCasePattern.test(name)) {
          context.report({
            node: node.id,
            messageId: "notCamelCase",
          });
        }
      }
  
      return {
        FunctionDeclaration: checkName,
        FunctionExpression: checkName,
        ArrowFunctionExpression: checkName,
      };
    },
  };
  