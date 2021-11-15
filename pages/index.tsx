import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
};

export { Home };
