import dictionaryMX from "@/lang/mx.json";

const useLanguage = () => {
	const t = (key) => {
		return dictionaryMX[key];
	};

	return { t };
};

export default useLanguage;
