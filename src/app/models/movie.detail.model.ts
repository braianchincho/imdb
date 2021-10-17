export interface MovieDatail {
    id?: string
    title?: string
    originalTitle?: string
    fullTitle?: string
    type?: string
    year?: string
    image?: string
    releaseDate?: string
    runtimeMins?: string
    runtimeStr?: string
    plot?: string
    plotLocal?: string
    plotLocalIsRtl?: boolean
    awards?: string
    directors?: string
    directorList?: CastPerson[]
    writers?: string
    writerList?: CastPerson[]
    stars?: string
    starList?: CastPerson[]
    actorList?: CastPerson[]
    fullCast?: any
    genres?: string
    genreList?: GenreList[]
    companies?: string
    companyList?: CompanyList[]
    countries?: string
    countryList?: CountryList[]
    languages?: string
    languageList?: LanguageList[]
    contentRating?: string
    imDbRating?: string
    imDbRatingVotes?: string
    metacriticRating?: string
    ratings?: any
    wikipedia?: any
    posters?: any
    images?: any
    trailer?: any
    boxOffice?: BoxOffice
    tagline?: string
    keywords?: string
    keywordList?: string[]
    similars?: Similar[]
    tvSeriesInfo?: any
    tvEpisodeInfo?: any
    errorMessage?: string
  }
  

  export interface CastPerson {
    id?: string
    image?: string
    name?: string
    asCharacter?: string
  }
  
  export interface GenreList {
    key?: string
    value?: string
  }
  
  export interface CompanyList {
    id?: string
    name?: string
  }
  
  export interface CountryList {
    key?: string
    value?: string
  }
  
  export interface LanguageList {
    key?: string
    value?: string
  }
  
  export interface BoxOffice {
    budget?: string
    openingWeekendUSA?: string
    grossUSA?: string
    cumulativeWorldwideGross?: string
  }
  
  export interface Similar {
    id?: string
    title?: string
    fullTitle?: string
    year?: string
    image?: string
    plot?: string
    directors?: string
    stars?: string
    genres?: string
    imDbRating?: string
  }