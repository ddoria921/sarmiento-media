import {
  KIM_JOSH_URI,
  KRISTINE_JAMES_URI,
  MACKENZIE_THOMAS_URI,
} from "./constants";

export async function fetchFromVimeo(path) {
  const accessToken = process.env.VIMEO_ACCESS_TOKEN;
  let data = [];

  try {
    const response = await fetch(`https://api.vimeo.com/${path}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });

    const json = await response.json();

    if (json.data) {
      data = json.data;
    } else {
      data = json;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function getInstagramImages() {
  let data = [];
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  try {
    const response = await fetch(
      // `https://graph.instagram.com/17841400687600145/media?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`,
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,permalink,thumbnail_url&access_token=${accessToken}`,
      {
        method: "GET",
        headers: {},
      }
    );

    const json = await response.json();

    console.log({ json });

    if (json.data) {
      data = json.data.map((media) => {
        const { id, media_type, media_url, permalink, thumbnail_url } = media;
        const imageUrl = media_type === "VIDEO" ? thumbnail_url : media_url;

        return {
          id,
          imageUrl,
          permalink,
          type: media_type,
        };
      });
    }
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function getVimeoVideos() {
  return fetchFromVimeo("users/78218633/videos?per_page=12");
}

export async function getTestimonialVideos() {
  const testimonialIds = [
    MACKENZIE_THOMAS_URI,
    KRISTINE_JAMES_URI,
    KIM_JOSH_URI,
  ];
  const data = await Promise.all(testimonialIds.map(fetchFromVimeo));

  return data;
}
