module.exports = ({ config }) => {
  return {
    ...config,
    plugins: [
      "expo-router",
      [
        "@mj-studio/react-native-naver-map",
        {
          client_id: process.env.EXPO_PUBLIC_NAVER_MAP_CLIENT_ID,
          // (optional, you can set with expo-location instead of this package)
          android: {
            ACCESS_FINE_LOCATION: true,
            ACCESS_COARSE_LOCATION: true,
            ACCESS_BACKGROUND_LOCATION: true,
          },
          // (optional, you can set with expo-location instead of this package)
          ios: {
            NSLocationAlwaysAndWhenInUseUsageDescription:
              "{{ your location usage description }}",
            NSLocationWhenInUseUsageDescription:
              "{{ your location usage description }}",
            NSLocationTemporaryUsageDescriptionDictionary: {
              purposeKey: "{{ your purpose key }}",
              usageDescription: "{{ your location usage description }}",
            },
          },
        },
      ],
      [
        "expo-build-properties",
        {
          android: {
            extraMavenRepos: ["https://repository.map.naver.com/archive/maven"],
          },
        },
      ],
    ],
  };
};
