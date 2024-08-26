import type { Actions, RequestEvent } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";
import { z } from "zod";

const newContactSchema = z.object({
    userName: z.string().min(1),
    password: z.string().min(1),
    email: z.string().email(),
});

export const load = (async (event) => {
    const form = await superValidate(event, zod(newContactSchema));

    return {
        form,
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(newContactSchema));
        console.log(form, " default action");

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data

        // Display a success status message
        return message(form, "Form posted successfully!");
    },
};
