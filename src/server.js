"use strict";
/* eslint-disable @typescript-eslint/ban-types */
Object.defineProperty(exports, "__esModule", { value: true });
const trpc = require("@trpc/server");
const appRouter = trpc.router().query('getUser', {
    input: (val) => {
        if (typeof val === 'string')
            return val;
        throw new Error(`Invalid input: ${typeof val}`);
    },
    async resolve(req) {
        req.input; // string
        return { id: req.input, name: 'Bilbo' };
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBaUQ7O0FBRWpELHFDQUFxQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtJQUM3QyxLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsRUFBRTtRQUNwQixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztRQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTO1FBQ3BCLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXMgKi9cblxuaW1wb3J0ICogYXMgdHJwYyBmcm9tICdAdHJwYy9zZXJ2ZXInO1xuXG5jb25zdCBhcHBSb3V0ZXIgPSB0cnBjLnJvdXRlcigpLnF1ZXJ5KCdnZXRVc2VyJywge1xuICAgIGlucHV0OiAodmFsOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykgcmV0dXJuIHZhbDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGlucHV0OiAke3R5cGVvZiB2YWx9YCk7XG4gICAgfSxcbiAgICBhc3luYyByZXNvbHZlKHJlcSkge1xuICAgICAgICByZXEuaW5wdXQ7IC8vIHN0cmluZ1xuICAgICAgICByZXR1cm4geyBpZDogcmVxLmlucHV0LCBuYW1lOiAnQmlsYm8nIH07XG4gICAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBBcHBSb3V0ZXIgPSB0eXBlb2YgYXBwUm91dGVyOyJdfQ==