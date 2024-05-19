import OpenAI from 'openai';

import { OPEN_AI_API_KEY } from '$env/static/private';

export const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });