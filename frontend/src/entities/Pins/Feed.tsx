import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../processes/client';
import { feedQuery } from '../../shared/api/feedQuery';
import { searchQuery } from '../../shared/api/searchQuery';
import MasonryLayout from '../../shared/ui/layout/MasonryLayout';
import Spinner from '../../shared/ui/Spinner';

type Props = {};

const Feed = (props: Props) => {
  const [pins, setPins] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    //! for specific pins
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      //! for all pins
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }

  if (!pins?.length)
    return (
      <h2 className=' flex justify-center items-center'>No pins available</h2>
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
