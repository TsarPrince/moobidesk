import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Partner
 *
 *
 */
export interface Partner extends SanityDocument {
  _type: "partner";

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Sub Heading — `string`
   *
   *
   */
  subheading?: string;

  /**
   * Buton — `object`
   *
   *
   */
  button?: {
    _type: "button";
    /**
     * Partner — `string`
     *
     *
     */
    partner?: string;
  };

  /**
   * Section 1 — `object`
   *
   *
   */
  section_1?: {
    _type: "section_1";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Sub Heading — `string`
     *
     *
     */
    subheading?: string;
  };

  /**
   * Section 2 — `object`
   *
   *
   */
  section_2?: {
    _type: "section_2";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Cards — `array`
     *
     *
     */
    cards?: Array<
      SanityKeyed<{
        /**
         * Heading — `string`
         *
         *
         */
        heading?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Image — `image`
         *
         *
         */
        image?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        };

        /**
         * Button Text — `string`
         *
         *
         */
        btn_text?: string;
      }>
    >;
  };

  /**
   * Section 3 — `object`
   *
   *
   */
  section_3?: {
    _type: "section_3";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Cards — `array`
     *
     *
     */
    cards?: Array<
      SanityKeyed<{
        /**
         * Heading — `string`
         *
         *
         */
        heading?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;

        /**
         * Image — `image`
         *
         *
         */
        image?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        };
      }>
    >;
  };

  /**
   * End Banner — `object`
   *
   *
   */
  endBanner?: {
    _type: "endBanner";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;
  };
}

export type Documents = Partner;
