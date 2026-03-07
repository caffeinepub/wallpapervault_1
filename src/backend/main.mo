import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import Set "mo:core/Set";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Nat "mo:core/Nat";


// Use migration function to keep stable state across upgrades

actor {
  include MixinStorage();

  let categories = Set.empty<Text>();
  let downloadCounts = Map.empty<Int, Nat>();

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

  public shared ({ caller }) func incrementDownloadCount(id : Int) : async Nat {
    let currentCount = switch (downloadCounts.get(id)) {
      case (null) { 0 };
      case (?count) { count };
    };
    let newCount = currentCount + 1;
    downloadCounts.add(id, newCount);
    newCount;
  };

  public query ({ caller }) func getDownloadCount(id : Int) : async Nat {
    switch (downloadCounts.get(id)) {
      case (null) { 0 };
      case (?count) { count };
    };
  };

  public query ({ caller }) func getAllDownloadCounts() : async [(Int, Nat)] {
    downloadCounts.toArray();
  };
};
