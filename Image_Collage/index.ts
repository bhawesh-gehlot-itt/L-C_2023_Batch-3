const apiKey: string = 'UA4v6WxZMViNe7D3178DAKa8HiV0SuaK7IJaSS0MoSWKF4vc7y7zzucb';
const apiUrl: string = 'https://api.pexels.com/v1/search?query=space&per_page=10';

async function fetchData(url: string, headers: Record<string, string>): Promise<any> {
    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error(`${response.status}: Unable to Fetch Image.`);
    return response.json();
}

function createImageElement(photo: { src: { large: string; photographer: string } }): HTMLImageElement {
    const { large, photographer } = photo.src;
    const imgElement: HTMLImageElement = document.createElement('img');
    Object.assign(imgElement, {
        src: large,
        alt: photographer,
        className: 'collageImage',
    });
    return imgElement;
}

function appendImagesToContainer(photos: { src: { large: string; photographer: string } }[], container: HTMLElement): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    photos.forEach(photo => fragment.appendChild(createImageElement(photo)));
    container.appendChild(fragment);
}

async function createImageCollage(): Promise<void> {
    try {
        const { photos } = await fetchData(apiUrl, { 'Authorization': apiKey });
        const collageContainer: HTMLElement | null = document.getElementById('collageContainer');
        if (collageContainer) {
            appendImagesToContainer(photos, collageContainer);
        } else {
            console.error('Could not find container in HTML.');
        }
    } catch (error) {
        console.error(error);
    }
}

createImageCollage();
