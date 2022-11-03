export const pinDetailMorePinQuery = (pin: any) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
     image{
       asset->{
         url
       }
     },
     _id,
     destination,
     postedBy->{
       _id,
       userName,
       image
     },
     save[]{
       _key,
       postedBy->{
         _id,
         userName,
         image
       },
     },
   }`;
  return query;
};
