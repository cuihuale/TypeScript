/// <reference path='fourslash.ts'/>

////export default class DefaultExportedClass {
////}
////
////var x: DefaultExportedClass;
////
////var y = new DefaultExportedClass;
////
////namespace [|{| "isWriteAccess": true, "isDefinition": true |}DefaultExportedClass|] {
////}

verify.noErrors();

// The namespace and class do not merge,
// so the namespace should be all alone.
verify.singleReferenceGroup("class DefaultExportedClass\nnamespace DefaultExportedClass");
