function componentTemplate(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const code = `
    import * as React from 'react';

    %%NEWLINE%%

    const %%COMPONENT_NAME%% = (props: React.SVGProps<SVGSVGElement>) => (
      %%JSX%%
    );

    %%EXPORTS%%
  `;

  const mapping = {
    COMPONENT_NAME: componentName,
    JSX: jsx,
    EXPORTS: exports,
    NEWLINE: "\n"
  };

  /**
   * API Docs: https://babeljs.io/docs/en/babel-template#api
   */
  const typeScriptTpl = template(code, {
    plugins: ["jsx", "typescript"],
    preserveComments: true,
    syntacticPlaceholders: true
  });

  return typeScriptTpl(mapping);
}

module.exports = componentTemplate;
