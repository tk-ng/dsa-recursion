function isBalanced(str, stack = []) {
	// Base case: If the string is empty, check if the stack is empty.
	if (str.length === 0) {
		return stack.length === 0;
	}

	const char = str[0];
	const rest = str.slice(1);

	// Opening brackets: Push onto the stack
	if (char === "(" || char === "{" || char === "[") {
		stack.push(char);
		return isBalanced(rest, stack);
	}

	// Closing brackets: Check if it matches the last opened bracket
	if (char === ")" || char === "}" || char === "]") {
		const lastBracket = stack.pop();
		if (
			(char === ")" && lastBracket !== "(") ||
			(char === "}" && lastBracket !== "{") ||
			(char === "]" && lastBracket !== "[")
		) {
			return false; // Mismatched bracket
		}
		return isBalanced(rest, stack);
	}

	// Ignore non-bracket characters
	return isBalanced(rest, stack);
}
