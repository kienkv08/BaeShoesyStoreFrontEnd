import React, { useState } from "react";
import { PageLoading } from "../../components/common/page_loading/page.loading";

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  return [
    () => setLoading(true),
    () => setLoading(false),
    loading ? React.createElement(PageLoading) : null,
  ];
};

export default useLoading;
