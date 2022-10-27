// Hook
import { useState, useEffect } from "react";

function useScript(src1, src2) {
	// Keep track of script status ("idle", "loading", "ready", "error")
	const [status, setStatus] = useState(src1 ? "loading" : "idle");
	const [status2, setStatus2] = useState(src2 ? "loading" : "idle");

	useEffect(
		() => {
			// Allow falsy src value if waiting on other data needed for
			// constructing the script URL passed to this hook.
			if (!src1) {
				setStatus("idle");
				return;
			}
			if (!src2) {
				setStatus2("idle");
				return;
			}
			// Fetch existing script element by src
			// It may have been added by another intance of this hook
			let script1 = document.querySelector(`script[src="${src1}"]`);
			let script2 = document.querySelector(`script[src="${src2}"]`);
			if (!script1) {
				// Create script
				script1 = document.createElement("script");
				script1.src = src1;
				script1.async = true;
				script1.setAttribute("data-status", "loading");
				// Add script to document body
				document.body.appendChild(script1);
				// Store status in attribute on script
				// This can be read by other instances of this hook
				const setAttributeFromEvent = (event) => {
					script1.setAttribute(
						"data-status",
						event.type === "load" ? "ready" : "error"
					);
				};
				script1.addEventListener("load", setAttributeFromEvent);
				script1.addEventListener("error", setAttributeFromEvent);
			} else {
				// Grab existing script status from attribute and set to state.
				setStatus(script1.getAttribute("data-status"));
			}
			// Script event handler to update status in state
			// Note: Even if the script already exists we still need to add
			// event handlers to update the state for *this* hook instance.
			const setStateFromEvent = (event) => {
				setStatus(event.type === "load" ? "ready" : "error");

				//here we can load the second script
				if (event.type === "load") {
					if (!script2) {
						// Create script
						script2 = document.createElement("script");
						script2.src = src2;
						script2.async = true;
						script2.setAttribute("data-status", "loading");
						// Add script to document body
						document.body.appendChild(script2);
						// Store status in attribute on script
						// This can be read by other instances of this hook
						const setAttributeFromEvent = (event) => {
							script2.setAttribute(
								"data-status",
								event.type === "load" ? "ready" : "error"
							);
						};
						script2.addEventListener("load", setAttributeFromEvent);
						script2.addEventListener("error", setAttributeFromEvent);
					} else {
						// Grab existing script status from attribute and set to state.
						setStatus2(script2.getAttribute("data-status"));
					}
					script2.addEventListener("load", setStateFromEvent);
					script2.addEventListener("error", setStateFromEvent);
				}
			};
			// Add event listeners
			script1.addEventListener("load", setStateFromEvent);
			script1.addEventListener("error", setStateFromEvent);
			// Remove event listeners on cleanup
			return () => {
				if (script1) {
					script1.removeEventListener("load", setStateFromEvent);
					script1.removeEventListener("error", setStateFromEvent);
				}
				if (script2) {
					script2.removeEventListener("load", setStateFromEvent);
					script2.removeEventListener("error", setStateFromEvent);
				}
			};
		},
		[src1, src2] // Only re-run effect if script src changes
	);
	return [status, status2];
}

export default useScript;