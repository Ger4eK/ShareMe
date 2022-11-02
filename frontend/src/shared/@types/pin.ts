type PinImage = {
  assets: {
    url: string;
  };
};

type PostedBy = {
  _id: string;
  image: string;
  userName: string;
};

export interface Pin {
  _id: string;
  destination?: string;
  image: PinImage;
  postedBy: PostedBy;
  save: []
}
