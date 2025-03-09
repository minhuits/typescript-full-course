/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>; // "CODE FACTORY"

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // "code factory"

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>; // "Code factory"

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>; // "code factory"