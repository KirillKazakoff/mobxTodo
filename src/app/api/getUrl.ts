type Params = {
    [key: string]: string | number;
};

export default function getUrl(params: Params, query: string) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach((param) => {
        const [key, value] = param;
        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    });

    let url = query;
    if (searchParams) url += `?${searchParams.toString()}`;
    return url;
}
