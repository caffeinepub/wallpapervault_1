import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  include MixinStorage();

  let categories = Set.empty<Text>();

  public shared ({ caller }) func addCategory(name : Text) : async () {
    if (categories.contains(name)) {
      Runtime.trap("Category already exists");
    } else {
      categories.add(name);
    };
  };

  public query ({ caller }) func getCategories() : async [Text] {
    categories.values().toArray();
  };

  public query ({ caller }) func categoryExists(category : Text) : async Bool {
    categories.contains(category);
  };
};
