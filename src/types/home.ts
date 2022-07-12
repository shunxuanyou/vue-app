export interface IEntry {
  'id': {
    label: string
    attributes: {
      'im:bundleId': string,
      'im:id': string
    }
  }
  'im:name': {
    label: string
  }
  'im:image': Array<{
    label: string,
    attributes: {
      height: string
    }
  }>
  'category': {
    attributes: {
      label: string
    }
  }
  'summary': {
    label: string
  }
  [prop: string]: any
}

export interface IRequestRss{
  feed: {
    entry: IEntry[]
  }
  [prop: string]: any
}

export interface IResults {
  averageUserRating : number,
  userRatingCountForCurrentVersion: number
  [prop: string]: any
}

export interface IRequestLookup {
  results: Array<{
    averageUserRating : number,
    userRatingCountForCurrentVersion: number
    [prop: string]: any
  }>
}
