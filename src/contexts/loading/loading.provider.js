import React, { useEffect, useState } from "react";
import useObservable from "../../core/hooks/useObservable.hooks";
import HttpService from "../../core/services/http/http.service";
import PropTypes from "prop-types";
import { LoadingContext } from "../../contexts/loading";
import { PageLoading } from "../../components/common/page_loading/page.loading";

export const LoadingProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const { subscribeUntilDestroy } = useObservable();

  useEffect(() => {
    subscribeUntilDestroy(HttpService.isRequesting$, (isRequesting) => {
      if (isRequesting) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        show: () => setLoading(true),
        hide: () => setLoading(false),
      }}
    >
      <>
        {loading && <PageLoading />}
        {props.children}
      </>
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node,
};
