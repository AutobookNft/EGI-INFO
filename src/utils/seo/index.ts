/**
 * SEO Utilities - Barrel Export
 * 
 * Central export point for all SEO-related utilities:
 * - Schema.org JSON-LD structured data
 * - ARIA accessibility components
 * - SEO meta tag helpers
 */

// JSON-LD Helper (React 19 compatible)
export { JsonLd } from './JsonLd';

// Schema.org component wrappers
export {
  AriaLandmark,
  AriaTabList,
  AriaTabPanel,
  SeoHead,
  OrganizationSchema,
  SoftwareApplicationSchema,
  DefinedTermSchema,
  HowToSchema,
  FAQPageSchema,
  ItemListSchema,
  useAnnounce,
} from './Components';

// Schema.org JSON-LD builder functions
export {
  createOrganizationSchema,
  createArticleSchema,
  createFAQSchema,
  createHowToSchema,
  createBreadcrumbSchema,
  createSoftwareSchema,
  createWebPageSchema,
  type OrganizationSchema as OrganizationSchemaType,
  type ArticleSchema,
  type ProductSchema,
  type FAQSchema,
  type HowToSchema as HowToSchemaType,
  type BreadcrumbSchema,
  type SoftwareApplicationSchema as SoftwareApplicationSchemaType,
  type WebPageSchema,
} from './SchemaOrg';
