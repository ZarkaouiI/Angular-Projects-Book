import { normalize } from '@angular-devkit/core';
import { MergeStrategy, Rule, SchematicContext, Tree, apply, applyTemplates, chain, externalSchematic, mergeWith, move, strings, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crudService(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
      ..._options,
      classify: strings.classify,
      dasherize: strings.dasherize
      }),
      move(normalize(_options.path ?? normalize('src/app/')))
     ]);

     return chain([
      externalSchematic('@schematics/angular', 'service', _options),
      mergeWith(templateSource, MergeStrategy.Overwrite)
     ]);
  };
}
