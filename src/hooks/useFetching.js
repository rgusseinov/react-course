import { useState } from "react";

const useFetching = (cb) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async() => {
    try {
      setLoading(true);
      await cb();
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return [fetching, isLoading, error];
}

export default useFetching;