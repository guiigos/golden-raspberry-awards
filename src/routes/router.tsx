import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Template from '../template';

const Router: React.FC = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/" element={<Template />}>
        <Route index path="/dashboard" element={<span></span>} />
        <Route path="/list" element={<span></span>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
