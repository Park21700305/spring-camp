// router/Router.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '../page/home';
import PostForm from '../page/post';
import Layout from '../components/layout';
import BoardTable from '../page/board';
import RedirectionAfterLoginPage from '../page/RedirectionAfterLoginPage';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="post" element={<PostForm />} />
        <Route path="board" element={<BoardTable />} />
        <Route
          path="/oauth2/redirect"
          element={<RedirectionAfterLoginPage />}
        />
        {/* 다른 라우트를 추가하세요 */}
      </Route>
    </Routes>
  );
};

export default Router;
