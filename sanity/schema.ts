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
 * Home Page
 *
 *
 */
export interface HomePage extends SanityDocument {
  _type: "homePage";

  /**
   * Top Banner — `object`
   *
   *
   */
  topBanner?: {
    _type: "topBanner";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Banner Button — `object`
     *
     *
     */
    bannerButton?: {
      _type: "bannerButton";
      /**
       * Text — `string`
       *
       *
       */
      text?: string;

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
    };
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
   * Company Images — `array`
   *
   *
   */
  companyImages?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * Stat Heading — `string`
   *
   *
   */
  statHeading?: string;

  /**
   * Stat Cards — `array`
   *
   *
   */
  statCards?: Array<
    SanityKeyed<{
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
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Percentage — `number`
       *
       *
       */
      percentage?: number;
    }>
  >;

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading 1 — `string`
     *
     *
     */
    heading_1?: string;

    /**
     * Heading 2 — `string`
     *
     *
     */
    heading_2?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Images — `array`
     *
     *
     */
    images?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
    >;

    /**
     * Desc 1 — `string`
     *
     *
     */
    desc_1?: string;

    /**
     * Desc 2 — `string`
     *
     *
     */
    desc_2?: string;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
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
     * Panels — `array`
     *
     *
     */
    panels?: Array<
      SanityKeyed<{
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
         * Title — `string`
         *
         *
         */
        title?: string;

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

    /**
     * Button Text — `string`
     *
     *
     */
    buttonText?: string;
  };

  /**
   * Section 6 — `object`
   *
   *
   */
  section_6?: {
    _type: "section_6";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Cards — `array`
     *
     *
     */
    cards?: Array<
      SanityKeyed<{
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
      }>
    >;
  };

  /**
   * Section 7 — `object`
   *
   *
   */
  section_7?: {
    _type: "section_7";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading 1 — `string`
     *
     *
     */
    subheading_1?: string;

    /**
     * Subheading 2 — `string`
     *
     *
     */
    subheading_2?: string;

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
  };

  /**
   * Mid Banner — `object`
   *
   *
   */
  midBanner?: {
    _type: "midBanner";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Button Text — `string`
     *
     *
     */
    buttonText?: string;
  };
}

/**
 * Customer Support Page
 *
 *
 */
export interface CustomerSupportPage extends SanityDocument {
  _type: "customerSupportPage";

  /**
   * Section 1 — `object`
   *
   *
   */
  section_1?: {
    _type: "section_1";
    /**
     * Logo — `image`
     *
     *
     */
    logo?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };

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
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
     * Client images — `array`
     *
     *
     */
    client_images?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
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
  };

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Social urls — `array`
     *
     *
     */
    social_urls?: Array<
      SanityKeyed<{
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
         * Name — `string`
         *
         *
         */
        name?: string;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
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
     * Panels — `array`
     *
     *
     */
    panels?: Array<
      SanityKeyed<{
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
         * Title — `string`
         *
         *
         */
        title?: string;

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
      }>
    >;
  };

  /**
   * Section 6 — `array`
   *
   *
   */
  section_6?: Array<
    SanityKeyed<{
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
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;
    }>
  >;

  /**
   * Section 7 — `object`
   *
   *
   */
  section_7?: {
    _type: "section_7";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;
  };

  /**
   * Section 8 — `object`
   *
   *
   */
  section_8?: {
    _type: "section_8";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;
  };

  /**
   * Section 9 — `object`
   *
   *
   */
  section_9?: {
    _type: "section_9";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Card 1 — `object`
     *
     *
     */
    card_1?: {
      _type: "card_1";
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
    };

    /**
     * Card 2 — `object`
     *
     *
     */
    card_2?: {
      _type: "card_2";
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
    };
  };

  /**
   * Section 10 — `object`
   *
   *
   */
  section_10?: {
    _type: "section_10";
    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Company Image — `image`
     *
     *
     */
    companyImage?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };

    /**
     * Person name — `string`
     *
     *
     */
    person_name?: string;

    /**
     * Person title — `string`
     *
     *
     */
    person_title?: string;
  };

  /**
   * Mid Banner — `object`
   *
   *
   */
  midBanner?: {
    _type: "midBanner";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Btn text — `string`
     *
     *
     */
    btn_text?: string;
  };
}

/**
 * Enterprise Page
 *
 *
 */
export interface EnterprisePage extends SanityDocument {
  _type: "enterprisePage";

  /**
   * Section 1 — `object`
   *
   *
   */
  section_1?: {
    _type: "section_1";
    /**
     * Logo — `image`
     *
     *
     */
    logo?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };

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
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
     * Client images — `array`
     *
     *
     */
    client_images?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
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
  };

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Social urls — `array`
     *
     *
     */
    social_urls?: Array<
      SanityKeyed<{
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
         * Name — `string`
         *
         *
         */
        name?: string;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
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
     * Panels — `array`
     *
     *
     */
    panels?: Array<
      SanityKeyed<{
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
         * Title — `string`
         *
         *
         */
        title?: string;

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
      }>
    >;
  };

  /**
   * Section 6 — `array`
   *
   *
   */
  section_6?: Array<
    SanityKeyed<{
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
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;
    }>
  >;

  /**
   * Section 7 — `object`
   *
   *
   */
  section_7?: {
    _type: "section_7";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;
  };

  /**
   * Section 8 — `object`
   *
   *
   */
  section_8?: {
    _type: "section_8";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;
  };

  /**
   * Section 9 — `object`
   *
   *
   */
  section_9?: {
    _type: "section_9";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Card 1 — `object`
     *
     *
     */
    card_1?: {
      _type: "card_1";
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
    };

    /**
     * Card 2 — `object`
     *
     *
     */
    card_2?: {
      _type: "card_2";
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
    };
  };

  /**
   * Section 10 — `object`
   *
   *
   */
  section_10?: {
    _type: "section_10";
    /**
     * Description 1 — `string`
     *
     *
     */
    description_1?: string;

    /**
     * Description 2 — `string`
     *
     *
     */
    description_2?: string;

    /**
     * Company Image — `image`
     *
     *
     */
    companyImage?: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };

    /**
     * Person name — `string`
     *
     *
     */
    person_name?: string;

    /**
     * Person title — `string`
     *
     *
     */
    person_title?: string;
  };

  /**
   * Mid Banner — `object`
   *
   *
   */
  midBanner?: {
    _type: "midBanner";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Btn text — `string`
     *
     *
     */
    btn_text?: string;
  };
}

/**
 * Whatsapp Page
 *
 *
 */
export interface WhatsappPage extends SanityDocument {
  _type: "whatsappPage";

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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
     * Description — `string`
     *
     *
     */
    description?: string;
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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

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
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Panels — `array`
     *
     *
     */
    panels?: Array<
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
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Tabular — `object`
     *
     *
     */
    tabular?: {
      _type: "tabular";
      /**
       * Topic1 — `string`
       *
       *
       */
      topic1?: string;

      /**
       * Topic2 — `string`
       *
       *
       */
      topic2?: string;

      /**
       * Row Details — `array`
       *
       *
       */
      rowDetails?: Array<
        SanityKeyed<{
          /**
           * Title — `string`
           *
           *
           */
          title?: string;

          /**
           * Is Topic1 — `boolean`
           *
           *
           */
          isTopic1?: boolean;

          /**
           * Is Topic2 — `boolean`
           *
           *
           */
          isTopic2?: boolean;
        }>
      >;
    };
  };

  /**
   * Section 6 — `object`
   *
   *
   */
  section_6?: {
    _type: "section_6";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Icons — `array`
     *
     *
     */
    icons?: Array<
      SanityKeyed<{
        /**
         * Icon — `image`
         *
         *
         */
        url?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        };

        /**
         * Name — `string`
         *
         *
         */
        name?: string;

        /**
         * Photo — `image`
         *
         *
         */
        photo?: {
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        };
      }>
    >;
  };

  /**
   * Section 7 — `object`
   *
   *
   */
  section_7?: {
    _type: "section_7";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Clients — `array`
     *
     *
     */
    clients?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
    >;
  };

  /**
   * Section 8 — `object`
   *
   *
   */
  section_8?: {
    _type: "section_8";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Questions — `array`
     *
     *
     */
    questions?: Array<
      SanityKeyed<{
        /**
         * Question — `string`
         *
         *
         */
        question?: string;

        /**
         * Answer — `array`
         *
         *
         */
        answer?: Array<SanityKeyed<string>>;
      }>
    >;
  };

  /**
   * Section 9 — `object`
   *
   *
   */
  section_9?: {
    _type: "section_9";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };
}

/**
 * Live Chat Page
 *
 *
 */
export interface LiveChatPage extends SanityDocument {
  _type: "liveChatPage";

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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Panels — `array`
     *
     *
     */
    panels?: Array<
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
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Clients — `array`
     *
     *
     */
    clients?: Array<
      SanityKeyed<{
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Questions — `array`
     *
     *
     */
    questions?: Array<
      SanityKeyed<{
        /**
         * Question — `string`
         *
         *
         */
        question?: string;

        /**
         * Answer — `array`
         *
         *
         */
        answer?: Array<SanityKeyed<string>>;
      }>
    >;
  };

  /**
   * Section 6 — `object`
   *
   *
   */
  section_6?: {
    _type: "section_6";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };
}

/**
 * Insurance Page
 *
 *
 */
export interface InsurancePage extends SanityDocument {
  _type: "insurancePage";

  /**
   * Section 1 — `object`
   *
   *
   */
  section_1?: {
    _type: "section_1";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

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
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
  };

  /**
   * Panels — `array`
   *
   *
   */
  panels?: Array<
    SanityKeyed<{
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
    }>
  >;

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Reasons — `array`
     *
     *
     */
    reasons?: Array<
      SanityKeyed<{
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
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };
}

/**
 * Retail Page
 *
 *
 */
export interface RetailPage extends SanityDocument {
  _type: "retailPage";

  /**
   * Section 1 — `object`
   *
   *
   */
  section_1?: {
    _type: "section_1";
    /**
     * Cap heading — `string`
     *
     *
     */
    cap_heading?: string;

    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
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
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

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
  };

  /**
   * Panels — `array`
   *
   *
   */
  panels?: Array<
    SanityKeyed<{
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
    }>
  >;

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Reasons — `array`
     *
     *
     */
    reasons?: Array<
      SanityKeyed<{
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
         * Title — `string`
         *
         *
         */
        title?: string;

        /**
         * Description — `string`
         *
         *
         */
        description?: string;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };
}

/**
 * Pricing Page
 *
 *
 */
export interface PricingPage extends SanityDocument {
  _type: "pricingPage";

  /**
   *  SGD Monthly Price — `number`
   *
   *
   */
  SGDMonthlyPrice?: number;

  /**
   * Currency List — `object`
   *
   *
   */
  currencyList?: {
    _type: "currencyList";
    /**
     * ARS — `number`
     *
     *
     */
    ARS?: number;

    /**
     * AUD — `number`
     *
     *
     */
    AUD?: number;

    /**
     * BGN — `number`
     *
     *
     */
    BGN?: number;

    /**
     * Rp — `number`
     *
     *
     */
    Rp?: number;

    /**
     * BRL — `number`
     *
     *
     */
    BRL?: number;

    /**
     *  SGD — `number`
     *
     *
     */
    SGD?: number;
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
  };

  /**
   * Section 2 — `object`
   *
   *
   */
  section_2?: {
    _type: "section_2";
    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Discount Percentage — `number`
     *
     *
     */
    discountPercentage?: number;

    /**
     * Plan 1 — `object`
     *
     *
     */
    plan_1?: {
      _type: "plan_1";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Features — `array`
       *
       *
       */
      features?: Array<
        SanityKeyed<{
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
           * Name — `string`
           *
           *
           */
          name?: string;
        }>
      >;

      /**
       * Button — `object`
       *
       *
       */
      button?: {
        _type: "button";
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      };
    };

    /**
     * Plan 2 — `object`
     *
     *
     */
    plan_2?: {
      _type: "plan_2";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Subheading — `string`
       *
       *
       */
      subheading?: string;

      /**
       * Features — `array`
       *
       *
       */
      features?: Array<
        SanityKeyed<{
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
           * Name — `string`
           *
           *
           */
          name?: string;
        }>
      >;

      /**
       * Button — `object`
       *
       *
       */
      button?: {
        _type: "button";
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      };
    };
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
     * Tables — `array`
     *
     *
     */
    tables?: Array<
      SanityKeyed<{
        /**
         * C1 — `string`
         *
         *
         */
        c1?: string;

        /**
         * C2 — `string`
         *
         *
         */
        c2?: string;

        /**
         * C3 — `string`
         *
         *
         */
        c3?: string;

        /**
         * Rows — `array`
         *
         *
         */
        rows?: Array<
          SanityKeyed<{
            /**
             * Name — `string`
             *
             *
             */
            name?: string;

            /**
             * C1 — `boolean`
             *
             *
             */
            c1?: boolean;

            /**
             * C2 — `boolean`
             *
             *
             */
            c2?: boolean;
          }>
        >;
      }>
    >;
  };

  /**
   * Section 4 — `object`
   *
   *
   */
  section_4?: {
    _type: "section_4";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Questions — `array`
     *
     *
     */
    questions?: Array<
      SanityKeyed<{
        /**
         * Question — `string`
         *
         *
         */
        question?: string;

        /**
         * Answer — `array`
         *
         *
         */
        answer?: Array<SanityKeyed<string>>;
      }>
    >;
  };

  /**
   * Section 5 — `object`
   *
   *
   */
  section_5?: {
    _type: "section_5";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Buttons — `array`
     *
     *
     */
    buttons?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };
}

/**
 * Partner Page
 *
 *
 */
export interface PartnerPage extends SanityDocument {
  _type: "partnerPage";

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

/**
 * Request Demo Page
 *
 *
 */
export interface RequestDemoPage extends SanityDocument {
  _type: "requestDemoPage";

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
     * Subheading — `string`
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
     * Portion 1 — `object`
     *
     *
     */
    portion_1?: {
      _type: "portion_1";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Sections — `array`
       *
       *
       */
      sections?: Array<
        SanityKeyed<{
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
           * Text — `string`
           *
           *
           */
          text?: string;
        }>
      >;
    };

    /**
     * Portion 2 — `object`
     *
     *
     */
    portion_2?: {
      _type: "portion_2";
      /**
       * Heading — `string`
       *
       *
       */
      heading?: string;

      /**
       * Urls — `array`
       *
       *
       */
      urls?: Array<
        SanityKeyed<{
          _type: "image";
          asset: SanityReference<SanityImageAsset>;
          crop?: SanityImageCrop;
          hotspot?: SanityImageHotspot;
        }>
      >;
    };
  };
}

/**
 * Footer Big
 *
 *
 */
export interface FooterBig extends SanityDocument {
  _type: "footerBig";

  /**
   * Top Footer — `object`
   *
   *
   */
  topFooter?: {
    _type: "topFooter";
    /**
     * Heading — `string`
     *
     *
     */
    heading?: string;

    /**
     * Subheading — `string`
     *
     *
     */
    subheading?: string;

    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Website URL — `object`
     *
     *
     */
    websiteURL?: {
      _type: "websiteURL";
      /**
       * Text — `string`
       *
       *
       */
      text?: string;

      /**
       * Url — `string`
       *
       *
       */
      url?: string;
    };

    /**
     * Download On Image — `object`
     *
     *
     */
    downloadOnImage?: {
      _type: "downloadOnImage";
      /**
       * Appstore — `image`
       *
       *
       */
      appstore?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };

      /**
       * Googleplay — `image`
       *
       *
       */
      googleplay?: {
        _type: "image";
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      };
    };

    /**
     * Contact Us Section — `object`
     *
     *
     */
    contactUsSection?: {
      _type: "contactUsSection";
      /**
       * Title — `string`
       *
       *
       */
      title?: string;

      /**
       * Description — `string`
       *
       *
       */
      description?: string;

      /**
       * Details — `array`
       *
       *
       */
      details?: Array<
        SanityKeyed<{
          /**
           * Field — `string`
           *
           *
           */
          field?: string;

          /**
           * Value — `string`
           *
           *
           */
          value?: string;

          /**
           * URL — `string`
           *
           *
           */
          URL?: string;
        }>
      >;
    };
  };

  /**
   * Footer Bottom — `object`
   *
   *
   */
  footerBottom?: {
    _type: "footerBottom";
    /**
     * Socials — `array`
     *
     *
     */
    socials?: Array<
      SanityKeyed<{
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
         * Link — `string`
         *
         *
         */
        link?: string;
      }>
    >;

    /**
     * Copyright Text — `string`
     *
     *
     */
    copyrightText?: string;

    /**
     * Links — `array`
     *
     *
     */
    links?: Array<
      SanityKeyed<{
        /**
         * Text — `string`
         *
         *
         */
        text?: string;

        /**
         * Url — `string`
         *
         *
         */
        url?: string;
      }>
    >;
  };

  /**
   * App Store — `string`
   *
   *
   */
  app_store?: string;

  /**
   * Google Play — `string`
   *
   *
   */
  google_play?: string;
}

/**
 * Footer Small
 *
 *
 */
export interface FooterSmall extends SanityDocument {
  _type: "footerSmall";

  /**
   * Footer line — `string`
   *
   *
   */
  footer_line?: string;

  /**
   * Links — `object`
   *
   *
   */
  links?: {
    _type: "links";
    /**
     * Socials — `array`
     *
     *
     */
    socials?: Array<
      SanityKeyed<{
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
         * Link — `string`
         *
         *
         */
        link?: string;
      }>
    >;

    /**
     * Page Links — `object`
     *
     *
     */
    pageLinks?: {
      _type: "pageLinks";
      /**
       * App Store — `string`
       *
       *
       */
      app_store?: string;

      /**
       * Google Play — `string`
       *
       *
       */
      google_play?: string;
    };
  };
}

/**
 * Navbar
 *
 *
 */
export interface Navbar extends SanityDocument {
  _type: "navbar";

  /**
   * Dropdown links — `array`
   *
   *
   */
  dropdown_links?: Array<
    SanityKeyed<{
      /**
       * Name — `string`
       *
       *
       */
      name?: string;

      /**
       * Dropdown — `array`
       *
       *
       */
      dropdown?: Array<
        SanityKeyed<{
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
           * Title — `string`
           *
           *
           */
          title?: string;

          /**
           * Description — `string`
           *
           *
           */
          description?: string;

          /**
           * Url — `string`
           *
           *
           */
          url?: string;
        }>
      >;
    }>
  >;

  /**
   * Links — `array`
   *
   *
   */
  links?: Array<
    SanityKeyed<{
      /**
       * Name — `string`
       *
       *
       */
      name?: string;

      /**
       * Link — `string`
       *
       *
       */
      link?: string;
    }>
  >;

  /**
   * Button — `object`
   *
   *
   */
  button?: {
    _type: "button";
    /**
     * Name — `string`
     *
     *
     */
    name?: string;

    /**
     * Link — `string`
     *
     *
     */
    link?: string;
  };
}

export type Documents =
  | HomePage
  | CustomerSupportPage
  | EnterprisePage
  | WhatsappPage
  | LiveChatPage
  | InsurancePage
  | RetailPage
  | PricingPage
  | PartnerPage
  | RequestDemoPage
  | FooterBig
  | FooterSmall
  | Navbar;
