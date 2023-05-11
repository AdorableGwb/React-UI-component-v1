import React, { useState } from "react";
import Button from "@/components/Button/Button";
const App = () => {
  const [loadings, setLoadings] = useState();
  return (
    <div>
      <Button type="primary" round>
        按钮按钮按钮
      </Button>
      <Button type="success" disabled>
        按钮按钮按钮
      </Button>
      <Button type="warning" loading>
        按钮按钮按钮
      </Button>
      <Button type="danger">按钮按钮按钮</Button>
      <Button disabled>按钮</Button>
    </div>
  );
};

export default App;
