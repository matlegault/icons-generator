function componentTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  module.exports = template;
  const code = `
        %%JSX%%
    `;

  const mapping = {
    JSX: jsx,
  };

  const typeScriptTpl = template(code, {
    plugins: ["jsx", "typescript"],
    preserveComments: true,
    syntacticPlaceholders: true,
  });

  return typeScriptTpl(mapping);
}

module.exports = componentTemplate;
