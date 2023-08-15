import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
	const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
	return slugRegex.test(param)
}
