import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    quote: {
      ...nodes.blockquote, 
      render: component('./src/components/QuoteFlickr.astro'),
      attributes: {
        name: { type: String },
        url: { type: String },
        description: { type: String },
      },
    },
  },
});