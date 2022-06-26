export const prepareIntegrationData = (data) => {
  const supportedFeatures = [];
  const unSupportedFeatures = [];

  data.forEach(({ feature_name, support }) => {
    if (feature_name) {
      (support && supportedFeatures.push(feature_name)) || unSupportedFeatures.push(feature_name);
    }
  });

  return { supportedFeatures, unSupportedFeatures };
};
