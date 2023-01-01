type Model = {
  id: number;
  firstname: string;
  lastname: string;
  gender: 'male' | 'female' | 'non-binary' | 'gender-fluid';
  bio: string;
  socialmedia: {
    facebook?: {
      url: string;
      followers: number;
    };
    twitter?: {
      url: string;
      followers: number;
    };
    instagram: {
      url: string;
      followers: number;
    };
  };
  measurements: Measurements;
  photographed_by: Photographer;
  images: string[];
};

type Photographer = {
  id: number;
  firstname: string;
  lastname: string;
};

type Measurements = {
  bust: string;
  waist: string;
  height: string;
  shoe: string;
  hair: string;
  eyes: string;
};
