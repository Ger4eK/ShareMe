export const pinDetailQuery = (pinId: string) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
     image{
       asset->{
         url
       }
     },
     _id,
     title, 
     about,
     category,
     destination,
     postedBy->{
       _id,
       userName,
       image
     },
    save[]{
       postedBy->{
         _id,
         userName,
         image
       },
     },
     comments[]{
       comment,
       _key,
       postedBy->{
         _id,
         userName,
         image
       },
     }
   }`;
  return query;
};
